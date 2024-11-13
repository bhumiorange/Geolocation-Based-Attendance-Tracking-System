import { redirect } from 'next/navigation';

export default function Page() {
    // Redirect to the landing page
    redirect('/Landing_Page');
    return null; // This component does not render anything
}