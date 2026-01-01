# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# 1. Install Node 22 LTS via NVM (production-stable)
nvm install 22
nvm use 22

# 2. Install pnpm (70% faster than npm)
npm install -g pnpm

# 3. Create Vue project
npm create vite@latest frontend-vite -- --template vue-ts
cd frontend

# 4. Install dependencies with pnpm
pnpm install

pnpm install vite-plugin-vue-mcp -D

# 5. Add shadcn-vue
pnpm dlx shadcn-vue@latest init
pnpm dlx shadcn-vue@latest add button card input

# 6. Run dev server
pnpm dev



pnpm install -D shadcn-vue@latest

pnpm install class-variance-authority clsx tailwind-merge lucide-vue-next
pnpm install tailwindcss @tailwindcss/vite

npx shadcn-vue@latest init

pnpm install tailwindcss @tailwindcss/vite