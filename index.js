$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/hexdump95/repos",
        contentType: "application/vnd.github.v3+json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#avatar').attr("src", data[0].owner.avatar_url);

            $.each(data, function (i, repository) {
                var description = repository.description;
                var language = repository.language;
                if (repository.description == null) { description = "" }
                if (repository.language == null) { language = "-" }
                $(".repos").append(
                    `<a href="https://github.com/hexdump95/` + repository.name + `">
						<div class="card">
							<h2>` + repository.name + `</h2>
							<h3>`+ description + `</h3>
							<p> Language: `+ language + `</p>
						</div>
					</a>`
                )
            });
        }
    });

});
function toggleLinks() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}