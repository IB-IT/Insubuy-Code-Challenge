
<html>

<body>
<div class="header">
  <h1>Insubuy code challenge</h1>
</div>

<div class="rules">
  <ul>
    <li>
      <a href="#basicRequirements">
        Basic Requirements
      </a>
    </li>
    <li>
      <a href="#quoteform">
        Quote Form Page
      </a>
    </li>
    <li>
      <a href="#resultspage">
        Results Page
      </a>
    </li>
    <li>
      <a href="#modal">
        Compare Modal
      </a>
    </li>
    <li>
      <a href="#extraCredit">
        Extra Credit
      </a>
    </li>
  </ul>
  <p>
    This challenge is intended to test your comfort with architecting components and managing
    state within an application. Please read and follow the instructions
    carefully as you will be scored based on your ability to follow instructions
    as well as on your code. In this challenge, you will be building an application
    allowing users to fill out a quote form to purchase insurance and display the results to the user on submit.
  </p>
  <p>
    You will be asked to build a site which have the
    functionality described below. The application server should be running at
    <a href="http://localhost:8080">http://localhost:8080</a> - if not, run 'npm start'.
  </p>
  <p>
    You can visit
    <a href="localhost:8080/api" target="_blank" rel="noopener noreferrer">
      http://localhost:8080/api
    </a>
    in the browser to view the documentation for the server api.
  </p>
  <p>
    The server includes a mocked database, which will hold information about
    the quote results of your app. Try not to modify the server, if at all possible.
  </p>
  <!--start-->

  <p>
    As you complete this challenge, please keep in mind that you will be
    assessed on the following:
  </p>
  <ul>
    <li>Time management</li>
    <li>Application performance</li>
    <li>Limiting memory usage</li>
    <li>App functionality</li>
    <li>Ability to recreate the mockup to likeness</li>
  </ul>

  <h3>Please branch out from the master branch like this {firstName-LastName}. Make sure you make frequent meaningful commits on your branch.
  Once you are ready to submit the code please send us a link to your github branch by replying to the email. You can reach out to us on the email if you
  have any questions about the challenge.</h3>
  <h3>Scaffolding The Project</h3>
  <p>
    The front end implementation of this project has two options. The first is using the existing structure and integrating your front end with it
    as you would in a single application. To do this, you would need to create a build with Webpack and create the basic structure on your own which would proxy the back end from either a proxy in the package.json or webpack dev server. The second option is to create a completely separate application which references the provided API as third party API. For example, you could use Create React App or Vue CLI to create the project in the client folder provided. Use http://localhost:8080/ in your AJAX requests to the server. This would require two terminals. One for your front end project and one for the back end project provided.
  </p>
  <hr/>
  <p id="basicRequirements">
    <h2>Basic requirements</h2>
    You will be creating a quote form that takes the following inputs from the user and validates them against the rules mentioned below. On successful submission
    the user will see a list of insurance plans that have already been mocked in the database. Please note: the input values have no relevance to the result data.
    The user should see the various plans in an user interface and peform below mentioned actions on them. The user should also be able to compare plans and view them
    separately in another component.
  </p>
  <hr/>
  <p id="quoteform">
  <h2>Quote form</h2>
  <p>
    You will create a quote form for the user from the mockup. Points will be given for closeness to the mock up. The form should be responsive across major browsers.
  <li>Use of any CSS framework is not allowed.</li>
  <li>You may use SCSS if you are comfortable with preprocessors.</li>
  </p>
  
  <p>
    The form should contain the following fields and validate against the rules for each. The validations should be shown below the corresponding field.
  </p>
  <li>Start Date
    <br>-User can either type or select a date
    <br>-The date should be in MM/DD/YYYY format.
  </li>
  <br>
  <li>End Date
    <br>-User can either type or select a date
    <br>-The date should be in MM/DD/YYYY format.
    <br>-The end date should be after the start date.
  </li>
  <br>
  <li>Policy max
    <br>-Must be a select box
    <br>- 50,000 ( value 50)
    <br>- 100,000 ( value 100)
    <br>- 250,000 ( value 250)
    <br>- 500,000 ( value 500)
  </li>
  <br>
  <li>Citizenship
    <br>-Must be a text box
    <br>-Should not allow numbers or special characters
  </li>
  <br>
  <li>Age/Year
    <br>-Must be a text box
    <br>-User can enter either birth year or age
    <br>-User cannot be more than a 100 years old
  </li>
  <br>
  <li>Mailing State
    <br>-Must be a text box
    <br>-Should not allow numbers or special characters
  </li>

  <p>
    All fields are mandatory. Form should be validated only on submit. The errors should go away once the user starts typing.
  </p>
  <p>
    All the fields should get reset when you hit the reset button.
  </p>
  </p>
  <hr/>
  <p id="resultspage">
    <h2>Results page</h2>
    On successful submission the user should see a list of various insurance plans. The styling aspect of this module to upto the challenge taker. Make sure
    it's aesthetic and responsive. Emphasis is on the functionality, so focus on that first. The user should see the data in a format deemed fit by the challenge taker.
    The user should be able to do the following actions.
    <br>
  <li>Sort by Price</li>
  <li>Sort by Name</li>
  <br>
  <li>Filter by Policy Max</li>
  <li>Filter by BestSeller</li>
  <li>Filter by Type</li>
  <li>Filter by Section</li>
  <br>
  <p>
    The user should also be able to view the data in
  <li>List view</li>
  <li>Grid view</li>
  <br>
  Design implementation is upon you.
  </p>
  </p>
  <hr/>
  <p id="modal">
    <h2>Modal</h2>
    The user should be able to select a maximum of 4 plans from the list and compare them.
    The compare modal should be a separate component that displays the data. A minimum of 2 plans are required to compare.
    Design is on you.
  </p>
  <hr/>
  <p id="extraCredit">
  <h2>Extra credit</h2>
  <ul>
  <li>
    You can use any framework of your choice.
  </li>
  <li>
    Bonus points for minimal use of external libraries.
  </li>
  <li>
    Bonus points for using Vue2.js ( We use Vue2.js ).
  </li>
  <li>
    Bonus points for clean indented and well commented code.
  </li>
</ul>



  </p>
</div>

</body>

</html>
