const newspaper = {
    articles: [],
    addArticle: function (title, content) {
        const article = {
            title: title,
            content: content,
        }
        this.articles.push(article)
    },
    showArticle: function(){
        let result = "";
        for(let i = 0; i < this.articles.length;i++){
            result += `Tytuł:${this.articles[i].title} Kontent:${this.articles[i].content}\n`
        }
        return result
    },
    removeArticle: function (title) {
        this.articles = this.articles.filter(article => article.title !== title);
    }
}

newspaper.addArticle("Tytuł", "Kontent")
newspaper.addArticle("WOJNA", "Clickbait")
console.log(newspaper.showArticle());
newspaper.removeArticle("WOJNA")
console.log("----------------------------");

console.log(newspaper.showArticle());