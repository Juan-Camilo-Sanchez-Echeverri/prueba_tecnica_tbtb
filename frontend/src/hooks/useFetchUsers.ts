import { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../types/userTypes';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(`Error: ${err.response.status} ${err.response.statusText}`);
        } else {
          setError('Error: Ocurrió un problema al obtener los datos');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
