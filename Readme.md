## Run server

```
npm start
```

It runs the server on localhost:3002.

## `Packeges & Dependecies`

### Install all the required packages by :

```
npm i
```
### Or your can go one by one
<ul>
<li> express </li>
<li> mongoose </li>
<li> body-parser </li>
<li> cors </li>
<li> dotenv </li>
<li> helmet </li>
</ul>

```
npm i express
```
```
npm i mongoose
```

```
npm i cors
```
```
npm i body-parser
```
```
npm i helmet
```

## `Structure`

There are 4 folders
<ul>
<li> Controller : It contains the functions used for logical operation.  </li>
<li> Models : It contains the schema of models. </li>
<li> Router : It calles the controller as per the api path. </li>
<li> Middleware : Stores the middleware which are used to check allowance to controller. </li>
</ul>

### `index.js`
we are running index.js file using node.js which is the root file of all the sub connected files.

we are using `express` for managing server.

### `.env`

Server Port and MongoDB url are stored in `config.env file` for security purpose.

### `Working`
<ul>
<li>In index.js file, Router are called as per the url.</li>
<li> Router checks the method-type and url to call respective controller. </li>
<li> Controller performs neccessery operation and return useful respond. </li>
</ul>



