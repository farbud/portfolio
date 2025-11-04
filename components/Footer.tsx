export function Footer() {
  return (
    <footer className=" border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-sm text-center gap-7">
        <p className="opacity-70">
          © {new Date().getFullYear()} Farbud. All rights reserved.
        </p>
        <div className="flex gap-4 opacity-80">
          <a
            href="https://github.com/farbud"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="mailto:farbudskate@gmail.com"
            className="hover:text-blue-500"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
