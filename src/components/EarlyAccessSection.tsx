import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function EarlyAccessSection() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Get Early Access Today!
            </h2>
            <p className="md:text-md">
              Be the first to explore our exciting new courses and features tailored for your success.
            </p>
            <div className="mt-6 w-full max-w-sm md:mt-8">
              <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
                <Input id="email" type="email" placeholder="Enter your email" />
                <Button title="Sign Up">Sign Up</Button>
              </form>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <p class='text-xs'>
                      By clicking Sign Up you're confirming that you agree with our
                      <a href='#' class='underline'>Terms and Conditions</a>.
                    </p>
                  `,
                }}
              />
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              className="w-full rounded-image object-cover"
              alt="Students collaborating on projects at Echaraf"
            />
          </div>
        </div>
      </div>
    </section>
  );
}