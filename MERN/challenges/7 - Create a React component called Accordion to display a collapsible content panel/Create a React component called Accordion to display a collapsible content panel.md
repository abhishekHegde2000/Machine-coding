### 7 - Create a React component called Accordion to display a collapsible content panel

**Topic:** React, TypeScript, State Management, Tailwind CSS, Props

**Task:**
Create a React component called `Accordion` to display a collapsible content panel.

**Requirements:**

-   The component should accept an array of items as a prop, where each item has a title and content.
-   Only one item should be expanded at a time.
-   Clicking on the title of an item should expand it and collapse any other expanded item.
-   Use TypeScript for type safety.
-   Style the component using Tailwind CSS.

**Example:**

```tsx
<Accordion
    items={[
        { title: "Section 1", content: "Content for section 1" },
        { title: "Section 2", content: "Content for section 2" },
        { title: "Section 3", content: "Content for section 3" },
    ]}
/>
```

Output:

```
(Displays a list of collapsible sections with only one expanded at a time)
```
