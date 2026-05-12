import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    // Inisialisasi: cek ada user yang nyangkut di localStorage saat web baru dibuka 
    currentUser: localStorage.getItem('currentUser') || null,
    // Fungsi untuk Login
    loginZustand: (username) => {
        localStorage.setItem('currentUser', username);
        set({ currentUser: username });
    },
    // Fungsi untuk Logout
    logoutZustand: () => {
        localStorage.removeItem('currentUser');
        set({ currentUser: null });
    }
}));