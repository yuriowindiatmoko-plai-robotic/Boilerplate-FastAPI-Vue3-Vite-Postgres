import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// Set default base URL for axios
// Ideally this should be in an env var
const API_URL = 'http://localhost:8000'

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | null>(localStorage.getItem('token'))
    const user = ref<any>(null)
    const router = useRouter()

    const isAuthenticated = computed(() => !!token.value)

    async function login(username: string, password: string) {
        try {
            const formData = new FormData()
            formData.append('username', username)
            formData.append('password', password)

            const response = await axios.post(`${API_URL}/api/auth/login`, formData)

            token.value = response.data.access_token
            localStorage.setItem('token', token.value as string)

            // Optionally fetch user details here if needed immediately
            // user.value = { ... }

            return { success: true }
        } catch (error: any) {
            console.error('Login failed', error)
            return {
                success: false,
                error: error.response?.data?.detail || 'Login failed'
            }
        }
    }

    async function register(username: string, password: string) {
        try {
            await axios.post(`${API_URL}/api/auth/register`, {
                username,
                password
            })
            return { success: true }
        } catch (error: any) {
            return {
                success: false,
                error: error.response?.data?.detail || 'Registration failed'
            }
        }
    }

    function logout() {
        token.value = null
        user.value = null
        localStorage.removeItem('token')
        // We can't use router here directly smoothly inside setup store sometimes without proper context
        // But usually returning it works or calling it from component
    }

    return { token, user, isAuthenticated, login, register, logout }
})
