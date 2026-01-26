
// Mock Auth Service
// Mimics a real backend authentication service

export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}

const MOCK_USER: User = {
    id: "1",
    email: "admin@trezo.com",
    name: "Olivia John",
    role: "admin",
};

const AUTH_KEY = "trezo_auth_user";

export const authService = {
    login: async (email: string, password: string): Promise<User> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simple mock validation
                if (email === "admin@trezo.com" && password === "password") {
                    localStorage.setItem(AUTH_KEY, JSON.stringify(MOCK_USER));
                    resolve(MOCK_USER);
                } else {
                    reject(new Error("Invalid email or password"));
                }
            }, 800); // Simulate network delay
        });
    },

    logout: (): void => {
        localStorage.removeItem(AUTH_KEY);
    },

    getCurrentUser: (): User | null => {
        const userStr = localStorage.getItem(AUTH_KEY);
        if (!userStr) return null;
        try {
            return JSON.parse(userStr);
        } catch {
            return null;
        }
    },

    isAuthenticated: (): boolean => {
        return !!localStorage.getItem(AUTH_KEY);
    },
};
