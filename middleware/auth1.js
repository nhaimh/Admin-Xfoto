export default function ({ redirect, app }) {
  if (!app.$cookies.get('token')) {
    return redirect('/login')
  }

}

// restart your application it will working