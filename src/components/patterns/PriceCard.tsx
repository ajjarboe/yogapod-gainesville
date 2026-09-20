import { CheckoutLink } from "@/components/patterns/CheckoutLink";
import { offerings, type OfferingKey } from "@/content/checkout";

export function PriceCard({
  offering,
  name,
  term,
  save,
  feature,
}: {
  offering: OfferingKey;
  name: string;
  term: string;
  save?: string;
  feature?: boolean;
}) {
  return (
    <div className={feature ? "price-card price-card-feature" : "price-card"}>
      <p className="price-term">{name}</p>
      <p className="price-amount">${offerings[offering].price.toLocaleString()}</p>
      <p className="price-term">{term}</p>
      {save ? <p className="price-save">{save}</p> : null}
      <div className="pt-6">
        <CheckoutLink offering={offering} variant={feature ? "primary" : "ghost"}>
          Get started
        </CheckoutLink>
      </div>
    </div>
  );
}
