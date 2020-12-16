ActiveAdmin.register Lesson do
    permit_params :id, :name, :description, :slug
    
    def to_param
        slug
    end

    controller do
        def find_resource
            scoped_collection.where(slug: params[:slug]).first!
        end
    end
end
