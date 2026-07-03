import { Show, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/react'
import './App.css'

function App() {

  return (
    <>
    <div>
    <h1>Welcome to the app</h1>
    <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <SignOutButton/>
                    <UserButton />
        </Show>
    </div>
    </>
  )
}

export default App
