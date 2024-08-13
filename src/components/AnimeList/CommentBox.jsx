import prisma from "@/libs/prisma"

const CommentBox = async ({anime_mal_id}) => {

    const comments = await prisma.comment.findMany({where: {anime_mal_id}})

    return (
        <div className="my-2 flex flex-col gap-2">
            {comments.map(comment => {
                return (
                    <div key={comment.id} className="bg-gray-200 rounded-b-3xl rounded-r-3xl px-4 py-2">
                        <p className="text-sm font-semibold">{comment.username}</p>
                        <p>{comment.comment}</p>
                    </div>
                )
            })}
        </div>
    )
} 

export default CommentBox