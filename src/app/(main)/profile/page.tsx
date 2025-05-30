// import { getCurrentUser } from '@/lib/auth'
// import { redirect } from 'next/navigation'

export default async function ProfilePage() {
//   const user = await getCurrentUser()

//   if (!user) {
//     redirect('/login')
//   }

  return (
    <div className="h-80 flex items-center justify-center bg-gray-100">
      <div className="bg-[#045e52] shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center text-white">👤 Your Profile</h1>
        <div className="space-y-2">
          <div className="text-white"><span className="font-medium text-white">Name:</span > {'vikas prins'}</div>
          <div className="text-white"><span className="font-medium text-white">Email:</span> {'vikasprins@1235'}</div>
          <div className="text-white"><span className="font-medium text-white">User ID:</span> {'1234'}</div>
        </div>
      </div>
    </div>
  )
}
