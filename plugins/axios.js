export default function ({ $axios, app }) {
    $axios.interceptors.request.use((config) => {
        const token = app.$cookies.get('token')
        if (token) {
            config.headers.common['Authorization'] = `Bearer ${token}`
        }
        return config
    })
}
