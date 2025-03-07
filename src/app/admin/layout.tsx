import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { RenderMounted } from '@/components/render-mounted';
import { ADMIN, USER } from '@/constants/constants';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const { data: authData } = await supabase.auth.getUser();
  // console.log("authData -", authData);

  if (authData?.user) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', authData.user.id)
      .single();
    // console.log("data -", data);
    if (error || !data) {
      console.log('Error fetching user data', error);
      return;
    }
    console.log("Redirecting to admin page");
    // if (data.type === ADMIN) return redirect('/');
  }

  return (
    <RenderMounted>
      <Header />
      <main className="min-h-[calc(100svh-128px)] py-3">
        {children}
      </main>
      <Footer />
    </RenderMounted>
  );
}