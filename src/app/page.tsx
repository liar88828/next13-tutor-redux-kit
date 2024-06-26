"use client"
import LogIn from "@/app/LogIn";
import { useAppSelector } from "@/redux/store";

export default function Home() {
  const { username, isModerator, uid } = useAppSelector( state => state.authReducer.value )

  return ( <main className="flex min-h-screen flex-col items-center justify-between p-24">
	<LogIn/>
	<p>Id : { uid } </p>
	<h1>Username : { username }</h1>
	{ isModerator && <h1>This user is Moderator</h1> }
  </main> )
}
