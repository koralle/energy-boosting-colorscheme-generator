---
name: agent-browser
description: Automates browser interactions for web testing, form filling, screenshots, and data extraction. Use when the user needs to navigate websites, interact with web pages, fill forms, take screenshots, test web applications, or extract information from web pages.
---

# Browser Automation with agent-browser

## Quick start

```bash
bun agent-browser open <url>        # Navigate to page
bun agent-browser snapshot -i       # Get interactive elements with refs
bun agent-browser click @e1         # Click element by ref
bun agent-browser fill @e2 "text"   # Fill input by ref
bun agent-browser close             # Close browser
```

## Core workflow

1. Navigate: `agent-browser open <url>`
2. Snapshot: `agent-browser snapshot -i` (returns elements with refs like `@e1`, `@e2`)
3. Interact using refs from the snapshot
4. Re-snapshot after navigation or significant DOM changes

## Commands

### Navigation

```bash
bun agent-browser open <url>      # Navigate to URL
bun agent-browser back            # Go back
bun agent-browser forward         # Go forward
bun agent-browser reload          # Reload page
bun agent-browser close           # Close browser
```

### Snapshot (page analysis)

```bash
bun agent-browser snapshot            # Full accessibility tree
bun agent-browser snapshot -i         # Interactive elements only (recommended)
bun agent-browser snapshot -c         # Compact output
bun agent-browser snapshot -d 3       # Limit depth to 3
bun agent-browser snapshot -s "#main" # Scope to CSS selector
```

### Interactions (use @refs from snapshot)

```bash
bun agent-browser click @e1           # Click
bun agent-browser dblclick @e1        # Double-click
bun agent-browser focus @e1           # Focus element
bun agent-browser fill @e2 "text"     # Clear and type
bun agent-browser type @e2 "text"     # Type without clearing
bun agent-browser press Enter         # Press key
bun agent-browser press Control+a     # Key combination
bun agent-browser keydown Shift       # Hold key down
bun agent-browser keyup Shift         # Release key
bun agent-browser hover @e1           # Hover
bun agent-browser check @e1           # Check checkbox
bun agent-browser uncheck @e1         # Uncheck checkbox
bun agent-browser select @e1 "value"  # Select dropdown
bun agent-browser scroll down 500     # Scroll page
bun agent-browser scrollintoview @e1  # Scroll element into view
bun agent-browser drag @e1 @e2        # Drag and drop
bun agent-browser upload @e1 file.pdf # Upload files
```

### Get information
```bash
bun agent-browser get text @e1        # Get element text
bun agent-browser get html @e1        # Get innerHTML
bun agent-browser get value @e1       # Get input value
bun agent-browser get attr @e1 href   # Get attribute
bun agent-browser get title           # Get page title
bun agent-browser get url             # Get current URL
bun agent-browser get count ".item"   # Count matching elements
bun agent-browser get box @e1         # Get bounding box
```

### Check state

```bash
bun agent-browser is visible @e1      # Check if visible
bun agent-browser is enabled @e1      # Check if enabled
bun agent-browser is checked @e1      # Check if checked
```

### Screenshots & PDF

```bash
bun agent-browser screenshot          # Screenshot to stdout
bun agent-browser screenshot path.png # Save to file
bun agent-browser screenshot --full   # Full page
bun agent-browser pdf output.pdf      # Save as PDF
```

### Video recording

```bash
bun agent-browser record start ./demo.webm    # Start recording (uses current URL + state)
bun agent-browser click @e1                   # Perform actions
bun agent-browser record stop                 # Stop and save video
bun agent-browser record restart ./take2.webm # Stop current + start new recording
```

Recording creates a fresh context but preserves cookies/storage from your session. If no URL is provided, it automatically returns to your current page. For smooth demos, explore first, then start recording.

### Wait

```bash
bun agent-browser wait @e1                     # Wait for element
bun agent-browser wait 2000                    # Wait milliseconds
bun agent-browser wait --text "Success"        # Wait for text
bun agent-browser wait --url "**/dashboard"    # Wait for URL pattern
bun agent-browser wait --load networkidle      # Wait for network idle
bun agent-browser wait --fn "window.ready"     # Wait for JS condition
```

### Mouse control

```bash
bun agent-browser mouse move 100 200      # Move mouse
bun agent-browser mouse down left         # Press button
bun agent-browser mouse up left           # Release button
bun agent-browser mouse wheel 100         # Scroll wheel
```

### Semantic locators (alternative to refs)

```bash
bun agent-browser find role button click --name "Submit"
bun agent-browser find text "Sign In" click
bun agent-browser find label "Email" fill "user@test.com"
bun agent-browser find first ".item" click
bun agent-browser find nth 2 "a" text
```

### Browser settings

```bash
bun agent-browser set viewport 1920 1080      # Set viewport size
bun agent-browser set device "iPhone 14"      # Emulate device
bun agent-browser set geo 37.7749 -122.4194   # Set geolocation
bun agent-browser set offline on              # Toggle offline mode
bun agent-browser set headers '{"X-Key":"v"}' # Extra HTTP headers
bun agent-browser set credentials user pass   # HTTP basic auth
bun agent-browser set media dark              # Emulate color scheme
```

### Cookies & Storage

```bash
bun agent-browser cookies                     # Get all cookies
bun agent-browser cookies set name value      # Set cookie
bun agent-browser cookies clear               # Clear cookies
bun agent-browser storage local               # Get all localStorage
bun agent-browser storage local key           # Get specific key
bun agent-browser storage local set k v       # Set value
bun agent-browser storage local clear         # Clear all
```

### Network

```bash
bun agent-browser network route <url>              # Intercept requests
bun agent-browser network route <url> --abort      # Block requests
bun agent-browser network route <url> --body '{}'  # Mock response
bun agent-browser network unroute [url]            # Remove routes
bun agent-browser network requests                 # View tracked requests
bun agent-browser network requests --filter api    # Filter requests
```

### Tabs & Windows
```bash
bun agent-browser tab                 # List tabs
bun agent-browser tab new [url]       # New tab
bun agent-browser tab 2               # Switch to tab
bun agent-browser tab close           # Close tab
bun agent-browser window new          # New window
```

### Frames
```bash
bun agent-browser frame "#iframe"     # Switch to iframe
bun agent-browser frame main          # Back to main frame
```

### Dialogs
```bash
bun agent-browser dialog accept [text]  # Accept dialog
bun agent-browser dialog dismiss        # Dismiss dialog
```

### JavaScript
```bash
bun agent-browser eval "document.title"   # Run JavaScript
```

## Example: Form submission

```bash
bun agent-browser open https://example.com/form
bun agent-browser snapshot -i
# Output shows: textbox "Email" [ref=e1], textbox "Password" [ref=e2], button "Submit" [ref=e3]

bun agent-browser fill @e1 "user@example.com"
bun agent-browser fill @e2 "password123"
bun agent-browser click @e3
bun agent-browser wait --load networkidle
bun agent-browser snapshot -i  # Check result
```

## Example: Authentication with saved state

```bash
# Login once
bun agent-browser open https://app.example.com/login
bun agent-browser snapshot -i
bun agent-browser fill @e1 "username"
bun agent-browser fill @e2 "password"
bun agent-browser click @e3
bun agent-browser wait --url "**/dashboard"
bun agent-browser state save auth.json

# Later sessions: load saved state
bun agent-browser state load auth.json
bun agent-browser open https://app.example.com/dashboard
```

## Sessions (parallel browsers)

```bash
bun agent-browser --session test1 open site-a.com
bun agent-browser --session test2 open site-b.com
bun agent-browser session list
```

## JSON output (for parsing)

Add `--json` for machine-readable output:

```bash
bun agent-browser snapshot -i --json
bun agent-browser get text @e1 --json
```

## Debugging

```bash
bun agent-browser open example.com --headed              # Show browser window
bun agent-browser console                                # View console messages
bun agent-browser errors                                 # View page errors
bun agent-browser record start ./debug.webm   # Record from current page
bun agent-browser record stop                            # Save recording
bun agent-browser open example.com --headed  # Show browser window
bun agent-browser --cdp 9222 snapshot        # Connect via CDP
bun agent-browser console                    # View console messages
bun agent-browser console --clear            # Clear console
bun agent-browser errors                     # View page errors
bun agent-browser errors --clear             # Clear errors
bun agent-browser highlight @e1              # Highlight element
bun agent-browser trace start                # Start recording trace
bun agent-browser trace stop trace.zip       # Stop and save trace
```
