"use client";

import { useMemo, useState } from "react";

type PassType = "WEEKEND" | "FRIDAY" | "SATURDAY" | "SUNDAY";
type Level = "Beginner" | "High Beginner" | "Improver" | "Intermediate" | "Advanced";

const prices = {
  early: { WEEKEND: 115, FRIDAY: 75, SATURDAY: 75, SUNDAY: 55 },
  late:  { WEEKEND: 130, FRIDAY: 95, SATURDAY: 95, SUNDAY: 65 },
};

function money(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    names: "",
    address: "",
    cityStateZip: "",
    phones: "",
    email: "",
    levels: [] as Level[],
    passType: "WEEKEND" as PassType,
    registeringBeforeApr15: true,
    tshirts: [{ size: "M", qty: 0 }] as Array<{ size: string; qty: number }>,
    stepBookletPaper: "NO" as "YES" | "NO",
    guestPassQty: 0,
    agreeHoldHarmless: false,
    signatures: [{ name: "", dob: "", dateSigned: "" }, { name: "", dob: "", dateSigned: "" }],
    notes: "",
  });

  const basePrice = useMemo(() => {
    const tier = form.registeringBeforeApr15 ? prices.early : prices.late;
    return tier[form.passType];
  }, [form.passType, form.registeringBeforeApr15]);

  const tshirtTotal = useMemo(() => {
    return form.tshirts.reduce((sum, t) => {
      if (!t.qty) return sum;
      const isXLPlus = ["XL", "2X", "3X"].includes(t.size);
      const each = isXLPlus ? 30 : 25;
      return sum + each * t.qty;
    }, 0);
  }, [form.tshirts]);

  const guestTotal = useMemo(() => form.guestPassQty * 10, [form.guestPassQty]);
  const total = useMemo(() => basePrice + tshirtTotal + guestTotal, [basePrice, tshirtTotal, guestTotal]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/or-bust-registration", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, total }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      alert("Sorry — something went wrong submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Registration received!</h1>
        <p className="mt-3 text-neutral-700">
          Thanks — we got your registration details. If you need to make changes, contact Dave &amp; Cheryl Bingham
          at <a className="underline underline-offset-4" href="mailto:binghamdancin@gmail.com">binghamdancin@gmail.com</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">…or Bust! 2026 Registration</h1>
      <p className="mt-3 text-neutral-700">
        Early pricing applies if registering before April 15. No refunds after May 30, 2026.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-8">
        <Section title="Contact info">
          <Field label="Name(s)">
            <input className="input" value={form.names} onChange={(e) => setForm({ ...form, names: e.target.value })} required />
          </Field>
          <Field label="Address">
            <input className="input" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required />
          </Field>
          <Field label="City, State, Zip Code">
            <input className="input" value={form.cityStateZip} onChange={(e) => setForm({ ...form, cityStateZip: e.target.value })} required />
          </Field>
          <Field label="Telephone Number(s)">
            <input className="input" value={form.phones} onChange={(e) => setForm({ ...form, phones: e.target.value })} required />
          </Field>
          <Field label="E-Mail (to receive workshop info)">
            <input className="input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </Field>
        </Section>

        <Section title="Workshop levels you’d like taught">
          <div className="grid gap-2 sm:grid-cols-2">
            {(["Beginner","High Beginner","Improver","Intermediate","Advanced"] as Level[]).map((lvl) => {
              const checked = form.levels.includes(lvl);
              return (
                <label key={lvl} className="flex items-center gap-2 rounded-2xl border border-neutral-200 p-3">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      setForm({
                        ...form,
                        levels: checked ? form.levels.filter((x) => x !== lvl) : [...form.levels, lvl],
                      })
                    }
                  />
                  <span>{lvl}</span>
                </label>
              );
            })}
          </div>
        </Section>

        <Section title="Pass selection">
          <div className="grid gap-3 sm:grid-cols-2">
            <Select
              label="Pass type"
              value={form.passType}
              onChange={(v) => setForm({ ...form, passType: v as PassType })}
              options={[
                { value: "WEEKEND", label: "Weekend Pass" },
                { value: "FRIDAY", label: "Friday Only" },
                { value: "SATURDAY", label: "Saturday Only" },
                { value: "SUNDAY", label: "Sunday Only" },
              ]}
            />

            <Select
              label="Registration date"
              value={form.registeringBeforeApr15 ? "EARLY" : "LATE"}
              onChange={(v) => setForm({ ...form, registeringBeforeApr15: v === "EARLY" })}
              options={[
                { value: "EARLY", label: "Before April 15" },
                { value: "LATE", label: "After April 15" },
              ]}
            />
          </div>

          <div className="rounded-2xl bg-neutral-50 p-4">
            <div className="flex items-baseline justify-between">
              <p className="text-sm text-neutral-700">Base pass price</p>
              <p className="font-semibold">{money(basePrice)}</p>
            </div>
          </div>
        </Section>

        <Section title="Add-ons">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <p className="font-medium">Souvenir T-Shirt</p>
            <p className="mt-1 text-sm text-neutral-700">
              Must be ordered before June 1 to guarantee size. S/M/L are $25; XL–3X are $30.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Select
                label="Size"
                value={form.tshirts[0].size}
                onChange={(v) => setForm({ ...form, tshirts: [{ ...form.tshirts[0], size: v }] })}
                options={[
                  { value: "S", label: "S" },
                  { value: "M", label: "M" },
                  { value: "L", label: "L" },
                  { value: "XL", label: "XL" },
                  { value: "2X", label: "2X" },
                  { value: "3X", label: "3X" },
                ]}
              />
              <Field label="Quantity">
                <input
                  className="input"
                  type="number"
                  min={0}
                  value={form.tshirts[0].qty}
                  onChange={(e) => setForm({ ...form, tshirts: [{ ...form.tshirts[0], qty: Number(e.target.value) }] })}
                />
              </Field>
              <div className="rounded-2xl bg-neutral-50 p-4">
                <p className="text-sm text-neutral-700">T-shirt total</p>
                <p className="mt-1 font-semibold">{money(tshirtTotal)}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Select
              label="Step booklet (paper copy?)"
              value={form.stepBookletPaper}
              onChange={(v) => setForm({ ...form, stepBookletPaper: v as "YES" | "NO" })}
              options={[
                { value: "YES", label: "Yes, paper copy" },
                { value: "NO", label: "No, electronic only" },
              ]}
            />

            <Field label="Guest pass qty ($10 each, Fri or Sat night)">
              <input
                className="input"
                type="number"
                min={0}
                value={form.guestPassQty}
                onChange={(e) => setForm({ ...form, guestPassQty: Number(e.target.value) })}
              />
            </Field>
          </div>

          <div className="rounded-2xl bg-neutral-50 p-4">
            <div className="flex items-baseline justify-between">
              <p className="text-sm text-neutral-700">Guest pass total</p>
              <p className="font-semibold">{money(guestTotal)}</p>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <p className="text-sm text-neutral-700">Total enclosed</p>
              <p className="text-lg font-semibold">{money(total)}</p>
            </div>
          </div>
        </Section>

        <Section title="Waiver agreement & signatures">
          <label className="flex items-start gap-3 rounded-2xl border border-neutral-200 p-4">
            <input
              type="checkbox"
              checked={form.agreeHoldHarmless}
              onChange={(e) => setForm({ ...form, agreeHoldHarmless: e.target.checked })}
              required
            />
            <span className="text-sm text-neutral-700">
              I/We agree to hold harmless Pikes Peak Line Dancers and the event, and authorize photo/video use.
              (Required)
            </span>
          </label>

          {form.signatures.map((s, idx) => (
            <div key={idx} className="mt-4 grid gap-3 sm:grid-cols-3">
              <Field label={idx === 0 ? "Signature name" : "Signature name (2nd attendee/guardian)"}>
                <input
                  className="input"
                  value={s.name}
                  onChange={(e) => {
                    const signatures = [...form.signatures];
                    signatures[idx] = { ...signatures[idx], name: e.target.value };
                    setForm({ ...form, signatures });
                  }}
                  required={idx === 0}
                />
              </Field>
              <Field label="Date of Birth (MM/YY)">
                <input
                  className="input"
                  value={s.dob}
                  onChange={(e) => {
                    const signatures = [...form.signatures];
                    signatures[idx] = { ...signatures[idx], dob: e.target.value };
                    setForm({ ...form, signatures });
                  }}
                />
              </Field>
              <Field label="Date signed">
                <input
                  className="input"
                  value={s.dateSigned}
                  onChange={(e) => {
                    const signatures = [...form.signatures];
                    signatures[idx] = { ...signatures[idx], dateSigned: e.target.value };
                    setForm({ ...form, signatures });
                  }}
                />
              </Field>
            </div>
          ))}

          <Field label="Optional notes (favorite dances, etc.)">
            <textarea
              className="input min-h-[120px]"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </Field>

          <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-medium">Mail-in note (if needed):</p>
            <p className="mt-1">
              Send signed registration/waiver to: PPLD c/o The Bingham’s, 113 Wood Lake Dr., Murrells Inlet, SC 29576.
              No refunds after May 30, 2026.
            </p>
          </div>
        </Section>

        <button
          disabled={loading}
          className="w-full rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit registration"}
        </button>
      </form>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid rgb(229 229 229);
          border-radius: 16px;
          padding: 10px 12px;
          outline: none;
        }
        .input:focus {
          border-color: rgb(23 23 23);
        }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-neutral-200 p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      <select className="input mt-2" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
