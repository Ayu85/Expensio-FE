import { create } from "zustand";

// Define a type for the state
interface AuthState {
    isAuth: boolean;
    login: () => void;
    logout: () => void;
}

// Create the Zustand store with the state type
const useAuth = create<AuthState>((set) => ({
    isAuth: false, // initial state
    login: () => {
        set({ isAuth: true })
    }, // login action
    logout: () => set({ isAuth: false }), // logout action
}));

export default useAuth;
