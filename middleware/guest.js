export default function ({ redirect, app }) {
    if (app.$cookies.get('token')) {
        return redirect('/')
    }
}