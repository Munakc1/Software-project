import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { 
  Mail,
  Bell,
  HeartPulse,
  BadgePercent,
  Check
} from "lucide-react";

export function NewsletterSignup() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#808000] mb-6 flex items-center gap-2">
        <Mail className="w-6 h-6" />
        Stay Informed
      </h2>

      <Alert className="bg-[#CDEDDB] border-[#BCB88A] mb-6">
        <AlertDescription>
          <p className="text-foreground">Subscribe to our health newsletters and never miss important updates.</p>
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-[#808000]" />
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="pl-10 border-[#BCB88A] focus-visible:ring-[#808000]"
            />
          </div>
        </div>

        {/* Subscription Options */}
        <div className="space-y-3">
          <h3 className="font-medium flex items-center gap-2 text-[#808000]">
            <Check className="h-4 w-4" />
            Subscription Preferences
          </h3>

          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 border border-[#BCB88A] rounded-lg">
              <HeartPulse className="h-5 w-5 text-[#808000]" />
              <div className="flex-1">
                <p className="font-medium">Health Tips Newsletter</p>
                <p className="text-sm text-muted-foreground">Weekly health advice and wellness tips</p>
              </div>
              <Input type="checkbox" className="h-5 w-5 accent-[#808000]" defaultChecked />
            </div>

            <div className="flex items-center gap-3 p-3 border border-[#BCB88A] rounded-lg">
              <Bell className="h-5 w-5 text-[#808000]" />
              <div className="flex-1">
                <p className="font-medium">Appointment Reminders</p>
                <p className="text-sm text-muted-foreground">Get notified about upcoming appointments</p>
              </div>
              <Input type="checkbox" className="h-5 w-5 accent-[#808000]" defaultChecked />
            </div>

            <div className="flex items-center gap-3 p-3 border border-[#BCB88A] rounded-lg">
              <BadgePercent className="h-5 w-5 text-[#808000]" />
              <div className="flex-1">
                <p className="font-medium">Promotional Offers</p>
                <p className="text-sm text-muted-foreground">Exclusive discounts on health services</p>
              </div>
              <Input type="checkbox" className="h-5 w-5 accent-[#808000]" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-[#808000] hover:bg-[#6d6d00] text-white mt-4">
          Subscribe Now
        </Button>

        {/* Privacy Note */}
        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}