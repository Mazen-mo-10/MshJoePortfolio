import { useToast } from "@/hooks/use-toast";
import type { ContactFormData } from "@/lib/contactSchema";

const CONTACT_EMAIL = "ymh796d68@gmail.com";

export function useContact() {
  const { toast } = useToast();

  const mutate = (
    data: ContactFormData,
    options?: { onSuccess?: () => void }
  ) => {
    const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
    const body = encodeURIComponent(
      `${data.message}\n\n---\nFrom: ${data.name}\nEmail: ${data.email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    toast({
      title: "Opening your email client",
      description: "Compose your message and send it from your mail app.",
      variant: "default",
      className: "border-primary/50 text-primary bg-background/90",
    });
    options?.onSuccess?.();
  };

  return {
    mutate,
    isPending: false,
  };
}
