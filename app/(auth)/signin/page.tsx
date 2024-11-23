export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};

import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <>
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Identification </h1>
        </div>
        {/* Form */}
        <form>
          <div className="space-y-4">
            <div>
             
             
            </div>
            <div>
              
            </div>
          </div>
          <div className="mt-6">
            <button className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
              S'identifier
            </button>


          </div>
        </form>
        {/* Bottom link */}
        <div className="mt-6 text-center">
          <button className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
              Nouveau sur MielZoo ? Inscrivez-vous
            </button>

          <div id="g_id_onload"
     data-client_id="290208051468-q3faf31fk8fie9a18a27i36sg01i5lf3.apps.googleusercontent.com"
     data-context="signin"
     data-ux_mode="popup"
     data-login_uri="https://mielzoo.cloud:3000/"
     data-auto_prompt="false">
</div>
{/* *

<div class="g_id_signin"
     data-type="standard"
     data-shape="rectangular"
     data-theme="outline"
     data-text="signin_with"
     data-size="large"
     data-locale="fr"
     data-logo_alignment="left">
</div>
      */} 
       </div>
      </>
    </>
  );
}
