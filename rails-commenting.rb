# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The controller is where your methods live. It coordinates the interaction between the user, the views, and the model. The index is the home page because it is the page at the 0 index.
class BlogPostsController < ApplicationController
  def index
    # ---2) .all is the value of every post created. This will show all posts on the home page
    @posts = BlogPost.all
  end

  def show
    # ---3) .find finds a specific blog post the user is looking for using a paramm  :id to be passed to the URL. This will only show 1 post
    @post = BlogPost.find(params[:id])
  end

  # ---4)The method new is the route that displays a form to the user. This data can be saved.
  def new
    @post = Post.new
  end

  def create
    # ---5) create submits user data to the database, valid? is asking if the post is valid. if it is valid. the page will redirect with the new post added.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)Edit is a form that will allow you to update or modify the post. This is the route between R and U.
  def edit
    @post = BlogPost.find(params[:id])
  end
# Update will comfirm the changes made on the post with whatever changes the user inputed in the edit form. find is updating one specific post.
  def update
    @post = BlogPost.find(params[:id])
    # ---7)update takes params to make sure the post has a title and content. If valid it will post. If invalid it will redirect you back to edit form.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end
  # Destroy is the delete method. First you .find one specific post you want to delete. If you delete it will redirect to all blog posts.
  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)This will bring you to the page of same post. Refreshes the page
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)This is a strong params method. These create restriction on the user to only access certain columns.
  private
  def blog_post_params
    # ---10) Making sure if you are posting a blog you can only post to blog posts page and you can only update the title and content columns.
    params.require(:blog_post).permit(:title, :content)
  end
end
