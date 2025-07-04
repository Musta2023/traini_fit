import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome, {user.name}!</h1>
      <p className="mb-6">This is your profile page.</p>
      {/* هنا ممكن تعرض المدونات أو معلومات إضافية */}
    </div>
  );
};

export default Profile;
