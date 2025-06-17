// hooks/useQuestionsData.js
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios'; // If you're using Firebase, replace this with firebase/firestore imports

const API_BASE = 'https://your-api-url.com/api'; // <-- Replace this with your actual backend URL

export const useQuestionsData = () => {
  const [questions, setQuestions] = useState([]);
  const [myQuestions, setMyQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState({ newAnswers: 0 });

  const currentUserId = 1; // Replace this with actual user ID from auth context or localStorage

  const loadQuestions = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/questions`);
      setQuestions(res.data);

      // Fetch answers and group them by questionId
      const answersRes = await axios.get(`${API_BASE}/answers`);
      const grouped = {};
      answersRes.data.forEach(ans => {
        if (!grouped[ans.questionId]) grouped[ans.questionId] = [];
        grouped[ans.questionId].push(ans);
      });
      setAnswers(grouped);
    } catch (err) {
      setError("Failed to load questions or answers.");
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMyQuestions = useCallback(async () => {
    try {
      const res = await axios.get(`${API_BASE}/questions?userId=${currentUserId}`);
      setMyQuestions(res.data);
    } catch (err) {
      setError("Failed to load your questions.");
    }
  }, []);

  const checkForNewAnswers = useCallback(async () => {
    try {
      const res = await axios.get(`${API_BASE}/notifications/new-answers?userId=${currentUserId}`);
      setNotifications({ newAnswers: res.data.count });
    } catch (err) {
      console.warn("Polling for new answers failed.");
    }
  }, []);

  useEffect(() => {
    loadQuestions();
    loadMyQuestions();
  }, [loadQuestions, loadMyQuestions]);

  useEffect(() => {
    const interval = setInterval(() => {
      checkForNewAnswers();
    }, 40000); // Check every 40 seconds
    return () => clearInterval(interval);
  }, [checkForNewAnswers]);

  return {
    questions,
    myQuestions,
    answers,
    loading,
    error,
    notifications,
    reload: () => {
      loadQuestions();
      loadMyQuestions();
    }
  };
};
