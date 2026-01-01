<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <nav class="bg-white dark:bg-gray-800 shadow">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <h1 class="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            </div>
          </div>
          <div class="flex items-center">
            <button
              @click="handleLogout"
              class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            Welcome Back!
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-6">
          <div class="px-4 py-8 sm:px-0">
            <div class="h-96 rounded-lg border-4 border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-center">
              <p class="text-gray-500 dark:text-gray-400">
                You are securely logged in.
                <br>
                Token: {{ authStore.token?.substring(0, 20) }}...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
