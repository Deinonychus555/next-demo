const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? process.env.NEXT_PUBLIC_DEV_SERVER : process.env.NEXT_PUBLIC_PROD_SERVER
