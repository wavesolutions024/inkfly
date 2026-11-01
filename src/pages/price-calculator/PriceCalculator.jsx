import { useState } from "react";
import { Link } from "react-router-dom";
import PageTop from "../../components/page-top/PageTop";
import "./PriceCalculator.scss";

const TATTOO_PRICE_PER_INCH = 700;
const PIERCING_PRICE = 700;

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(amount);

const PriceCalculator = () => {
  const [service, setService] = useState("tattoo");
  const [tattooInches, setTattooInches] = useState("1");
  const [piercingCount, setPiercingCount] = useState("1");

  const tattooSize = Number(tattooInches);
  const piercings = Number(piercingCount);
  const isTattooSizeValid = Number.isFinite(tattooSize) && tattooSize > 0;
  const isPiercingCountValid = Number.isInteger(piercings) && piercings > 0;
  const estimate =
    service === "tattoo" && isTattooSizeValid
      ? tattooSize * TATTOO_PRICE_PER_INCH
      : service === "piercing" && isPiercingCountValid
        ? piercings * PIERCING_PRICE
        : null;

  return (
    <>
      <PageTop title="PRICE CALCULATOR" details="Plan your next piece" />

      <main className="parent calculator_parent">
        <div className="cont calculator_cont">
          <span className="indicator">YOUR IDEA, YOUR ESTIMATE</span>
          <h1>Let’s find a starting point.</h1>

          <div className="calculator_layout">
            <section
              className="calculator_form_card"
              aria-labelledby="calculator-form-title"
            >
              <div className="calculator_card_heading">
                <span className="calculator_step">01</span>
                <div>
                  <h2 id="calculator-form-title">Choose your service</h2>
                  <p>Select what you’re planning.</p>
                </div>
              </div>

              <div
                className="calculator_service_choices"
                role="group"
                aria-label="Choose a service"
              >
                <button
                  type="button"
                  className={service === "tattoo" ? "active" : ""}
                  aria-pressed={service === "tattoo"}
                  onClick={() => setService("tattoo")}
                >
                  <span className="calculator_choice_icon" aria-hidden="true">
                    ✳
                  </span>
                  <span>
                    <strong>Tattoo</strong>
                    <small>
                      ₹{formatPrice(TATTOO_PRICE_PER_INCH)} per inch
                    </small>
                  </span>
                  <span className="calculator_choice_check" aria-hidden="true">
                    ✓
                  </span>
                </button>

                <button
                  type="button"
                  className={service === "piercing" ? "active" : ""}
                  aria-pressed={service === "piercing"}
                  onClick={() => setService("piercing")}
                >
                  <span className="calculator_choice_icon" aria-hidden="true">
                    ◉
                  </span>
                  <span>
                    <strong>Piercing</strong>
                    <small>₹{formatPrice(PIERCING_PRICE)} each</small>
                  </span>
                  <span className="calculator_choice_check" aria-hidden="true">
                    ✓
                  </span>
                </button>
              </div>

              {service === "tattoo" ? (
                <div className="calculator_input_group">
                  <label htmlFor="tattoo-size">Approximate tattoo size</label>
                  <div className="calculator_input_wrap">
                    <input
                      id="tattoo-size"
                      type="number"
                      min="0.5"
                      step="0.5"
                      inputMode="decimal"
                      value={tattooInches}
                      onChange={(event) => setTattooInches(event.target.value)}
                    />
                    <span>inches</span>
                  </div>
                  <p>Enter the approximate length of your tattoo in inches.</p>
                </div>
              ) : (
                <div className="calculator_input_group">
                  <label htmlFor="piercing-count">Number of piercings</label>
                  <div className="calculator_input_wrap">
                    <input
                      id="piercing-count"
                      type="number"
                      min="1"
                      step="1"
                      inputMode="numeric"
                      value={piercingCount}
                      onChange={(event) => setPiercingCount(event.target.value)}
                    />
                    <span>{piercings === 1 ? "piercing" : "piercings"}</span>
                  </div>
                  <p>Enter how many piercings you’re planning.</p>
                </div>
              )}
            </section>

            <aside className="calculator_estimate_card" aria-live="polite">
              <span className="calculator_estimate_label">YOUR ESTIMATE</span>
              <h2>{estimate === null ? "—" : `₹${formatPrice(estimate)}`}</h2>
              <p className="calculator_estimate_description">
                {service === "tattoo"
                  ? `${isTattooSizeValid ? formatPrice(tattooSize) : "—"} inch${tattooSize === 1 ? "" : "es"} × ₹${formatPrice(TATTOO_PRICE_PER_INCH)} per inch`
                  : `${isPiercingCountValid ? piercings : "—"} piercing${piercings === 1 ? "" : "s"} × ₹${formatPrice(PIERCING_PRICE)} each`}
              </p>

              <div className="calculator_estimate_divider" />

              <p className="calculator_price_note">
                This is an approximate estimate. Design, placement and other
                details can affect the final cost.
              </p>
              <p className="calculator_contact_note">
                For more information, contact Inkfly Tattoo. Final price will be
                confirmed at the studio.
              </p>
              <Link className="calculator_contact_link" to="/contact">
                Contact the studio <span aria-hidden="true">→</span>
              </Link>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default PriceCalculator;
