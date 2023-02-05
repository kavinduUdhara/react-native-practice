# week 01
## Exploring building a component

So far, you have learned about different React Native components, including core components, community components and your custom native components. You learned how to build a component from scratch in an earlier video.

In this reading, you will explore the code to build a component from scratch for the Little Lemon app.

The first step is to create a new file for the reusable header component of the Little Lemon app. Create a new file within the components folder; you can call it anything you like. In this example, it’s been named `LittleLemonHeader.js`

### Define LittleLemonHeaderComponent
```tsx
import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function LittleLemonHeader() {
    return (
      <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
        <Text style={{ padding: 40, fontSize: 30, color: 'black' }}>
          Welcome to Little Lemon
        </Text>
      </View>
    );
}
```

The preceding component is a simple reusable header component. It uses the two core components of React Native: `View` and `Text`. Within the parent view, the welcome text is wrapped.

The text will read “**Welcome to Little Lemon.**” Notice that styling options have been added to both the parent view and the text content. While rendering JSX elements, you must ensure that the elements are wrapped within a parent view, just as you see in this example.

### Render LittleLemonHeader Component

Now that the header component is defined, how do you display the rendering of the header component on the mobile app?

In the next step, **rendering the header component**, you will import it within the `App` component, which is the entry point to the Little Lemon app.  The header component can be imported from the components folder where it lives, using the statement below:

```tsx
import LittleLemonHeader from './components/LittleLemonHeader';
```

### App Component
```tsx
import * as React from 'react';
import { View } from 'react-native';

 // Import a local component here
 import LittleLemonHeader from './components/LittleLemonHeader';
 export default function App() {
   return (
     <View
       style={{
         flex: 1,
         backgroundColor: '#495E57',
       }}>
       <LittleLemonHeader />
     </View>
   );
 }
```

The `App` component renders the `LittleLemonHeader` within its return method. Notice it is wrapped by a parent view. The `View` is given styling with a background color and a flex property of **1**.

That’s it!

You have just created a custom component for the header and learned how to plug it in and render it from a parent component. In this way, you can create numerous custom components within your React Native app.

This reading taught you how to build custom components within React Native.

## Exercise: Your first React Native component

### Overview 

So far, you have learned what React Native components are and how to build a simple, reusable React component. In this activity, you will practice creating another reusable React component for the Little Lemon mobile app. This will enable you to efficiently create React components and reuse them across your mobile app.

### Scenario 

The Little Lemon app has a header component at the top that reads Little Lemon. However, you have also been asked to create a footer component for the app. You will use the Text and View components from React Native to achieve this. These components will then display the copyright information on all screens and appear at the very bottom of the screen, as illustrated in the image below:

<img width="195" alt="m_QthiwGR_GybLQdIQeg-w_ed1e770f94264c348f017bae71bebba1_5134-Your-fist-component" src="https://user-images.githubusercontent.com/88233364/216807345-5917cb5d-896b-4db8-8740-fd01257f2a36.png">

### Starter Code

Use the code below and build upon it to complete this exercise. 

Download the starter code from the zipped file below:

[DGr3v1WMTPCrBreDimMJfg_07a018d714384d76844b934bf38adba1_first-rn-component.zip](https://github.com/kavinduUdhara/react-native-practice/files/10610429/DGr3v1WMTPCrBreDimMJfg_07a018d714384d76844b934bf38adba1_first-rn-component.zip)

### Instructions

**Step 1: Create Footer Component**

Your first step is to create a footer component. The footer component should display the following text:

**All rights reserved by Little Lemon, 2022**

**Hint:** Make sure to utilize the `View` and `Text` components from React Native to build the footer component.

**Step 2: Style Footer Component**

In this step, you will add styles to your footer component. This is a creative process, so you can choose styles based on your ideas, such as font size and colors. 

**Hint:** You can use similar styles as the header component that has been provided in the starter code

**Step 3: Call Footer Component from App Component**

In the final step, you will import the footer component and render it from the app component. This ensures that the footer text is rendered on the screen.

### Conclusion 

By completing this exercise, you will demonstrate your understanding and ability to create reusable React components in React Native apps. You have shown how to use some of the core components in React Native, such as `View` and `Text`, while building the React component for the footer.           

my output:

<img width="195" alt="m_QthiwGR_GybLQdIQeg-w_ed1e770f94264c348f017bae71bebba1_5134-Your-fist-component" src="https://user-images.githubusercontent.com/88233364/216807547-57b24b5c-e8ad-4689-a3f7-d5f8531a0441.jpg">

my code ([Footer.tsx](https://github.com/kavinduUdhara/react-native-practice/blob/main/coursera-course-meta/components/Footer.tsx)):
```tsx
export default function footer() {
    return(
        <View style={{flex: 1, justifyContent: "flex-end", backgroundColor: 'white'}}>
            <Text style={{ backgroundColor: '#F4CE14', padding: 5,textAlign: 'center' }}>
                All rights reserved by Little Lemon, 2022
            </Text>
        </View>
    );
};
```

the example ([LittleLemonFooter.tsx](https://github.com/kavinduUdhara/react-native-practice/blob/main/coursera-course-meta/components/LittleLemonFooter.tsx)):
```tsx
export default function LittleLemonFooter() { 
    return ( 
        <View 
            style={{ 
                backgroundColor: '#F4CE14', 
                marginBottom: 10, 
                }}> 
            <Text 
            style={{ 
                fontSize: 18, 
                color: 'black', 
                textAlign: 'center', 
                }}> 
                All rights reserved by Little Lemon, 2022{' '} 
                </Text> 
        </View> 
    ); 
    } 
```
