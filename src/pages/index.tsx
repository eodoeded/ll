import React from "react";
// Import your components, icons, and tokens here
import { Button } from "../../components/src/ui/button/Button";
import { Checkbox } from "../../components/src/ui/checkbox/Checkbox";
import { Badge } from "../../components/src/ui/badge/Badge";
import { Spinner } from "../../components/src/ui/spinner/Spinner";
import { Listbox } from "../../components/src/ui/listbox/Listbox";
import { Tabs } from "../../components/src/ui/tabs/Tabs";
import * as Icons from "../../icons/react";
import tokens from "../../styles/src/tokens.json";

const colorTokens = Object.entries(tokens).filter(
  ([, value]) => typeof value === "object" && value.type === "color"
);

export default function Home() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#f8f9fa", minHeight: "100vh" }}>
      <header style={{ padding: "2rem 2rem 1rem", borderBottom: "1px solid #e0e0e0", background: "#fff", marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>Oxide Design Library</h1>
        <p style={{ color: "#666", margin: 0 }}>A visual catalog of all design system components, icons, and tokens</p>
      </header>
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: 32 }}>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Components</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 1px 4px #0001", padding: 24, minWidth: 200 }}>
              <Button>Default</Button>
            </div>
            <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 1px 4px #0001", padding: 24, minWidth: 200 }}>
              <Checkbox label="Checkbox" />
            </div>
            <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 1px 4px #0001", padding: 24, minWidth: 200 }}>
              <Badge>Badge</Badge>
            </div>
            <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 1px 4px #0001", padding: 24, minWidth: 200 }}>
              <Spinner />
            </div>
            <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 1px 4px #0001", padding: 24, minWidth: 200 }}>
              <Listbox options={[{ label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }]} />
            </div>
            <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 1px 4px #0001", padding: 24, minWidth: 300 }}>
              <Tabs tabs={[{ label: "Tab 1", value: "1" }, { label: "Tab 2", value: "2" }]} />
            </div>
          </div>
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Icons</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: 24 }}>
            {Object.entries(Icons).map(([name, Icon]) => (
              <div key={name} style={{ background: "#fff", borderRadius: 8, boxShadow: "0 1px 4px #0001", padding: 16, textAlign: "center" }}>
                <Icon />
                <div style={{ fontSize: 12, color: "#666", marginTop: 8 }}>{name}</div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Color Tokens</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {colorTokens.map(([name, token]) => (
              <div key={name} style={{ background: "#fff", borderRadius: 8, boxShadow: "0 1px 4px #0001", padding: 16, minWidth: 120, textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: token.value, margin: "0 auto 8px", border: "1px solid #eee" }} />
                <div style={{ fontSize: 12, color: "#666" }}>{name}</div>
                <div style={{ fontSize: 12, color: "#aaa" }}>{token.value}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 