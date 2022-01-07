# IndiAmPizza
** https://github.com/sitap1312/IndiAmPizza**
** **

# Project Overview

## Project Name

IndiAmPizza

## Project Description
 
This is a React website using styled components and react hooks. The website is fully responsive and has a restaurant food ordering e-commerce design. 

## Data Sample
```
export const productData = [
  {
    img: product1,
    alt: "Pizza",
    name: "Veggi Pizza",
    desc: "Marinara sauce, Green Bellpepper, Onion, Tomato, Olives, Mashrooms and Pizza Cheese",
    price: "$17.99",
    button: "Add to Cart"
  },

  {
    img: product2,
    alt: "Pizza",
    name: "Suprime Veggi Delite",
    desc: "Marinara sauce, Green Bellpepper, Onion, Tomato, Olives, BabyCorn, and Pizza Cheese",
    price: "$19.99",
    button: "Add to Cart"
  },
  
```
## Wireframes

![Screen Shot 2021-07-13 at 7 47 15 AM](https://user-images.githubusercontent.com/85080279/125473070-fb21f69b-68ce-47df-846e-89a25183994b.png)

### MVP/PostMVP
  

#### MVP 

- Create React App, install dependencies. 
- Create a base frame for the project.
- Create Components and display data.
- Display all Items.
- Navigations to all components.
- Adding media query.
- Add styling in CSS, include Flexbox or Grid styling.

#### PostMVP  

- Allow user to add item to the cart.
- Render video links for recipes.
- Allow user to scroll back to the top of the page by single click.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 3| Priority Matrix, Wireframes, Project Approval | Complete
|Jan 4| Core Application Structure | InComplete
|Jan 5| Actual code | InComplete
|Jan 6| MVP  | InComplete
|Jan 7| CSS Styling | InComplete
|Jan 8| PMVP and advance styling  | InComplete
|Jan 9| Advance Styling, PMVP| InComplete
|Jan 10| Presentations | InComplete

## Priority Matrix

![Screen Shot 2021-07-13 at 8 49 59 AM](https://user-images.githubusercontent.com/85080279/125484019-0e18f284-5363-4659-8a7b-4d07f215a34d.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating basic structure| H | 3hrs| 4rs | 4hrs |
| Components | H | 6hrs | 3hrs | 3hrs |
| React actual code | H | 3hrs | 4hrs | 4hrs |
| Working with API | H | 3hrs| 2hrs | 2hrs |
| CSS Styling | H | 6hrs | 7hrs | 7hrs |
| Navigations | H | 3hrs | 1.5hrs | 1.5hrs |
| Editing and Deleting | H | 2hrs | 0.5hrs | 0.5hrs |
| Responsive web desiging | H | 5hrs | 8hrs | 8hrs |
| Advance CSS Styling | H | 6hrs | 7hrs | 7hrs |
| PMVP Styling | H | 2hr | 2hrs | 2hrs |
| Review of Functionality | H | 3hrs | 1hrs | 1hrs |
| Total | H | 43hrs| 40hrs | 40hrs |

## Code Snippet

```
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
      
----------------------------------------------------------------------------------------------------------
 function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen)
  };


  return (
    <HeroContainer>

      <Navbar toggle={toggle} />

      <Sidebar isOpen={isOpen} toggle={toggle} />

      <HeroContent>

        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>

      </HeroContent>

    </HeroContainer>
  )
};

export default Hero;

```

## Change Log
 ```

 ```
