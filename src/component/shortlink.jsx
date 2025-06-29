import React, { useState } from "react";
import Loader from "./loader";
import { MdOutlineContentCopy } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { TbCopy } from "react-icons/tb";

export default function Shortlink() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleShorten = async () => {
    if (!url) return;
    setLoading(true);
    setShortUrl("");
    setCopied(false);
    setError('')
    try {
      
      const res = await fetch("http://localhost:5000/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.shortUrl) {
        setShortUrl(data.shortUrl);
        setUrl(data.shortUrl);
        setLoading(false)
      } else if (data.error){
        setLoading(false)
        setError(data.error)
      }
      setLoading(false)
    } catch (e) {
      setError(e.message ? e.message : 'unexpected error occured')
      setLoading(false)

    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleReset = () => {
    console.log("handlereset run");
    setUrl("");
    setShortUrl("");
    setCopied(false);
    setLoading(false);
  };

  return (
    <div className="url-shortener-container">
      <h2 className="shorten-form-title">URL Shortener</h2>
      <form
        spellCheck={false}
        className="url-form"
        onSubmit={(e) => {
          e.preventDefault();
          shortUrl ? handleReset() : handleShorten();
        }}
      >
        <div className="form-group url-form-group">
          <label htmlFor="longUrl" className="form-label">
            Enter long URL
          </label>

          <div className="url-form-input-box">
            <input
              id="longUrl"
              type="text"
              className="form-input url-form-input"
              placeholder="https://example.com/very/long/url"
              value={url}
              disabled={!!shortUrl}
              onChange={(e) => setUrl(e.target.value)}
            />

            <div className="actions">
              {loading && (
                <span className="loading-indicator" role="status">
                  <Loader size={18} color={"black"} thickness={2} />
                </span>
              )}

              {!loading && shortUrl && (
                <button type="button" onClick={handleCopy} className="copy-btn">
                  {copied ? <TiTick color="green" size={22}/> : <MdOutlineContentCopy/>}
                </button>
              )}
            </div>
          </div>

          {/* Error message for validation */}
          {error && <p className="error url-form-error">{error}</p>}
        </div>

        <button
          type="submit"
          className="submit-btn primary-btn"
          disabled={loading || (!url && !shortUrl)}
        >
          {loading
            ? "generating..."
            : shortUrl
            ? "Generate Another"
            : "Shorten"}
        </button>
      </form>
    </div>
  );
}
