# Firebase Authentication Setup Guide

This guide will help you set up Firebase authentication for your Jira website with professional sign-up and login pages.

## Prerequisites

- A Google account
- Firebase project
- Node.js and npm

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter your project name (e.g., "Jira-App")
4. Accept the terms and click "Create project"
5. Wait for the project to be created

## Step 2: Enable Email/Password Authentication

1. In the Firebase Console, go to **Authentication**
2. Click on the **Sign-in method** tab
3. Click on **Email/Password**
4. Toggle the **Enable** switch
5. Click **Save**

## Step 3: Get Your Firebase Credentials

1. In the Firebase Console, go to **Project Settings** (gear icon)
2. Click on the **General** tab
3. Scroll down to find your Firebase SDK snippet
4. Click on "Config" to see the configuration object
5. Copy the configuration values

Your config should look like this:
```javascript
{
  apiKey: "xxxxx",
  authDomain: "xxxxx.firebaseapp.com",
  projectId: "xxxxx",
  storageBucket: "xxxxx.appspot.com",
  messagingSenderId: "xxxxx",
  appId: "xxxxx"
}
```

## Step 4: Update Environment Variables

1. Open the `.env.local` file in the root of your project
2. Replace the placeholders with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

3. Save the file

## Step 5: Test the Authentication System

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

3. You should be redirected to the login page at `/auth/login`

4. Click "Sign Up" to create a new account

5. Enter your email and password, then click "Create Account"

6. After successful sign-up, you'll be redirected to the board page

## Features Implemented

### Authentication Pages

#### Login Page (`/auth/login`)
- Email and password login
- "Remember me" checkbox
- "Forgot Password?" link (placeholder)
- Social login buttons (Google & GitHub - placeholder)
- Sign-up link for new users
- Professional dark gradient background
- Error handling and validation

#### Sign-Up Page (`/auth/signup`)
- Full name, email, and password fields
- Password confirmation
- Terms and conditions agreement
- Minimum password length validation
- Social sign-up options
- Login link for existing users
- Professional dark gradient background
- Error handling and validation

### Protected Routes

All dashboard pages are now protected:
- `/board` - Main board
- `/backlog` - Backlog planning
- `/timeline` - Project timeline
- `/reports` - Analytics reports
- `/code` - Development integration
- `/project-settings` - Project configuration

### User Menu

The header now includes:
- User profile button with initials
- Dropdown menu showing user email
- Sign Out button

## Project Structure

```
src/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx          # Login page
│   │   ├── signup/
│   │   │   └── page.tsx          # Sign-up page
│   │   └── layout.tsx            # Auth layout
│   ├── components/
│   │   ├── AuthProvider.tsx      # Auth context and hook
│   │   ├── ProtectedRoute.tsx    # Protected route wrapper
│   │   ├── JiraShell.tsx         # Updated with logout
│   │   └── ...other components
│   ├── board/
│   │   └── page.tsx              # Protected board page
│   ├── backlog/
│   │   └── page.tsx              # Protected backlog page
│   ├── timeline/
│   │   └── page.tsx              # Protected timeline page
│   ├── reports/
│   │   └── page.tsx              # Protected reports page
│   ├── code/
│   │   └── page.tsx              # Protected code page
│   ├── project-settings/
│   │   └── page.tsx              # Protected settings page
│   ├── page.tsx                  # Home page (redirects based on auth)
│   └── layout.tsx                # Root layout with AuthProvider
├── lib/
│   └── firebase.ts               # Firebase configuration
└── .env.local                    # Environment variables
```

## Authentication Flow

1. **Unauthenticated User**
   - Visits `/` → Redirected to `/auth/login`

2. **Sign-Up**
   - User fills sign-up form
   - Firebase creates user account
   - User is automatically logged in
   - Redirected to `/board`

3. **Login**
   - User enters credentials
   - Firebase authenticates user
   - Redirected to `/board`

4. **Protected Routes**
   - `ProtectedRoute` component checks authentication
   - If user is not logged in → Redirected to `/auth/login`
   - If user is logged in → Displays page content

5. **Logout**
   - User clicks "Sign Out" in header menu
   - Firebase session is cleared
   - User is redirected to `/auth/login`

## Error Handling

The authentication system includes comprehensive error handling:

- **Invalid Email Format**: Shows validation error
- **Weak Password**: Shows password requirement message
- **Account Already Exists**: Firebase error message is displayed
- **Wrong Credentials**: Firebase error message is displayed
- **Missing Fields**: Validation error is shown

All errors are displayed in a user-friendly red alert box on the form.

## Security Features

✅ **Environment Variables**: Firebase keys are stored securely in `.env.local`
✅ **Protected Routes**: Unauthorized users are redirected to login
✅ **Auth State Management**: Auth state is managed centrally via Context API
✅ **Session Persistence**: Firebase maintains user sessions automatically
✅ **Password Security**: Passwords are hashed by Firebase

## Customization

### Change Colors

Edit the Tailwind classes in:
- `src/app/auth/login/page.tsx`
- `src/app/auth/signup/page.tsx`
- `src/app/components/JiraShell.tsx`

For example, change `from-blue-600` to `from-purple-600` for different accent colors.

### Add Social Authentication

To enable Google or GitHub login:

1. In Firebase Console → Authentication → Sign-in methods
2. Enable Google or GitHub
3. Add OAuth credentials
4. Implement the social login in the auth pages

### Customize User Profile Info

Edit `src/app/components/AuthProvider.tsx` to add more user data to the context.

## Troubleshooting

### "Missing environment variables" Error

Make sure all Firebase credentials are correctly entered in `.env.local` and the development server is restarted.

### Users not staying logged in after refresh

This is normal during development. The auth state will load from Firebase, but if it seems to not work:
1. Check that Firebase is properly initialized
2. Make sure cookies are enabled in your browser

### "Too many requests" Error

Firebase has rate limiting. If you get this error:
1. Wait a few minutes before trying again
2. Consider implementing request throttling

## Next Steps

1. **Forgot Password**: Implement password reset functionality
2. **Email Verification**: Add email verification on sign-up
3. **User Profile**: Create user profile management pages
4. **OAuth**: Integrate Google and GitHub authentication
5. **Two-Factor Authentication**: Add 2FA for enhanced security

## Support

For more information:
- [Firebase Documentation](https://firebase.google.com/docs/auth)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)

---

**Created**: 2024
**Last Updated**: 2024
