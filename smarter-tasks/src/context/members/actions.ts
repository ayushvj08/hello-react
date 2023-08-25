import React  from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { MemberActions } from './reducer';

export const fetchMembers = async (dispatch: React.Dispatch<MemberActions>) => {
    try {
        dispatch({type: 'FETCH_MEMBERS_REQUEST'})
        const token = localStorage.getItem("authToken") ?? "";
        const response = await fetch(`${API_ENDPOINT}/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
          console.log(data);
          dispatch({type: 'FETCH_MEMBERS_SUCCESS', payload: data})
      }
       catch (error) {
        console.log("Error Fetching Members: ", error);
        dispatch({type: 'FETCH_MEMBERS_FAILURE', payload: 'Unable to load members'})
      }
}

export const addMember = async (dispatch: React.Dispatch<MemberActions>, args: {name: string, email: string, password: string}) => {
  try {
      const token = localStorage.getItem("authToken") ?? "";
      const response = await fetch(`${API_ENDPOINT}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(args),
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }
      const data = await response.json();
      // console.log(data);

      if (data.errors && data.errors.length > 0) {
        return { ok: false, error: data.errors[0].message };
      }

      dispatch({type: 'ADD_MEMBER_SUCCESS', payload: data.user})
      return { ok: true };
    } 
    catch (error) {
      console.log("Error Fetching Members: ", error);
      return { ok: false, error };

    }
}

export const removeMember = async (id: number,  dispatch: React.Dispatch<MemberActions>) => {
    try {
      const token = localStorage.getItem("authToken") ?? "";
      const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to remove Member");
      }
      const data = await response.json();

      if (data.errors && data.errors.length > 0) {
        return { ok: false, error: data.errors[0].message };
      }
      dispatch({type: 'REMOVE_MEMBER_SUCCESS', payload: id})
      return { ok: true };

    } catch (error) {
      console.log("Error Deleting Member: ", error);
      return { ok: false, error };
    }
  };
