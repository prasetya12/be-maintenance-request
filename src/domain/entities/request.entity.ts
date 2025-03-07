class RequestEntity {
    constructor(public id: string,
        public title: string,
        public description: string,
        public statusId: number,
        public urgencyId: number,
        public createdAt: Date,
        public updatedAt: Date,
        public resolvedAt?: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.statusId = statusId;
        this.urgencyId = urgencyId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.resolvedAt = resolvedAt;
    }
}

export default RequestEntity;