<nav class="navbar">
    <ul>
        <li><a href="/">All Respondents</a></li>
        <li><a href="/">Professional Developers</a></li>
        <li><a href="/">Learning to Code</a></li>
        <li><a href="/">Other Coders</a></li>
    </ul>
</nav>

<style>
    .navbar {
        display: flex;
        flex-direction: row; 
        justify-content: space-between; 
        align-items: center;
        color: #f5f9f0;
        width: max-content;
        padding: 1em;
    }

    .navbar ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row; 
        flex-wrap: wrap;
    }

    .navbar li a{
        text-decoration: none;
        color: #c4c8cc;
        padding: .5em 1.5em;
        border-radius: 1000px;
    }

    .navbar li a:hover{
       background-color: #3c5668;
       cursor: pointer;
    }


</style>
