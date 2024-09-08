/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vSaFJ95d1k9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TextIcon className="h-6 w-6" />
          <h1 className="text-xl font-bold">RFT Coin</h1>
        </div>
        <Button variant="ghost" size="icon">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </header>
      <main className="flex-1 p-4 grid gap-4">
        <section className="bg-card rounded-lg p-4 grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Tap to Earn</h2>
            <div className="bg-primary rounded-full px-3 py-1 text-primary-foreground text-sm font-medium">
              100 Mine Coins
            </div>
          </div>
          <Button className="w-full h-12 text-lg font-medium">Tap to Earn</Button>
        </section>
        <section className="bg-card rounded-lg p-4 grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Boosts</h2>
            <Link href="#" className="text-primary font-medium" prefetch={false}>
              Claim
            </Link>
          </div>
          <div className="grid gap-2">
            <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Daily Reward</p>
                <p className="text-2xl font-bold">50 Mine Coins</p>
              </div>
              <Button variant="ghost" size="icon">
                <LockOpenIcon className="h-6 w-6" />
                <span className="sr-only">Claim</span>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">2x Boost</p>
                <p className="text-2xl font-bold">24h</p>
              </div>
              <Button variant="ghost" size="icon">
                <LockOpenIcon className="h-6 w-6" />
                <span className="sr-only">Claim</span>
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-card rounded-lg p-4 grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Referrals</h2>
            <Link href="#" className="text-primary font-medium" prefetch={false}>
              Invite
            </Link>
          </div>
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center gap-4">
            <div className="bg-primary rounded-full px-3 py-1 text-primary-foreground text-sm font-medium">
              50 Mine Coins
            </div>
            <p className="text-sm text-muted-foreground">Invite your friends and earn 50 Mine Coins per referral.</p>
            <div className="flex items-center gap-2">
              <Input type="text" placeholder="Referral link" className="flex-1" />
              <Button variant="ghost" size="icon">
                <CopyIcon className="h-6 w-6" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-card rounded-lg p-4 grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Tasks</h2>
            <Link href="#" className="text-primary font-medium" prefetch={false}>
              View All
            </Link>
          </div>
          <div className="grid gap-2">
            <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Daily Login</p>
                <p className="text-2xl font-bold">50 Mine Coins</p>
              </div>
              <Button variant="ghost" size="icon">
                <CheckIcon className="h-6 w-6" />
                <span className="sr-only">Complete</span>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Invite 5 Friends</p>
                <p className="text-2xl font-bold">100 Mine Coins</p>
              </div>
              <Button variant="ghost" size="icon">
                <CheckIcon className="h-6 w-6" />
                <span className="sr-only">Complete</span>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Watch 10 Videos</p>
                <p className="text-2xl font-bold">75 Mine Coins</p>
              </div>
              <Button variant="ghost" size="icon">
                <CheckIcon className="h-6 w-6" />
                <span className="sr-only">Complete</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CoinsIcon className="h-6 w-6" />
          <p className="text-lg font-bold">100 Mine Coins</p>
        </div>
        <Button variant="ghost" size="icon">
          <WalletIcon className="h-6 w-6" />
          <span className="sr-only">Wallet</span>
        </Button>
      </footer>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function CoinsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  )
}


function CopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function LockOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function TextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}


