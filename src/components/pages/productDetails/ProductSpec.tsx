import React from "react";

type RowType = {
  label: string;
  key: string;
};

type SectionType = {
  title: string;
  rows: RowType[];
};

type Props = {
  specs: any;
  sections: SectionType[];
};

const Section = ({ title, children }: any) => (
  <section className="mb-8">
    <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold text-primary">
      {title}
    </span>

    <div className="divide-y divide-gray-200 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
      {children}
    </div>
  </section>
);

const Row = ({ label, value }: any) => {
  // Handle booleans: show Yes/No
  if (typeof value === "boolean") {
    value = value ? "Yes" : "No";
  }

  // Skip undefined or null
  if (value === undefined || value === null) return null;

  return (
    <div className="grid bg-white/40 grid-cols-2 px-6 py-4 text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
};

function getValue(obj: any, path: string) {
  return path.split(".").reduce((o, key) => o?.[key], obj);
}

const ProductSpec: React.FC<Props> = ({ specs, sections }) => {
  return (
    <div className="rounded-3xl bg-linear-to-br from-primary/5 to-gray-100/20 p-8 shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">
        Specification
      </h2>

      {sections.map((section) => (
        <Section key={section.title} title={section.title}>
          {section.rows.map((row) => (
            <Row
              key={row.label}
              label={row.label}
              value={getValue(specs, row.key)}
            />
          ))}
        </Section>
      ))}
    </div>
  );
};

export default ProductSpec;
