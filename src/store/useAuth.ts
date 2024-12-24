import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

// Define a type for the state
interface AuthState {
    isAuth: boolean;
    authUser: null;
    login: (data: any) => void;
    logout: () => void;
}

// Create the Zustand store with the state type
const useAuth = create<AuthState>((set) => ({
    isAuth: false, // initial state
    authUser: null,
    login: (data) => {
        set({ isAuth: true })
        set({ authUser: data })
    }, // login action
    logout: () => set({ isAuth: false }), // logout action
    checkAuth: async () => {
        const user = await axiosInstance.get('/auth/check')
        if (user) {
            set({ authUser: user.data.user })
            set({ isAuth: true })
        }
    }
}));

export default useAuth;
