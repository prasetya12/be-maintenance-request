class RequestEntity {
    constructor(public id: string,
        public title: string,
        public description: string,
        public status: string,
        public urgency: string,
        public createdAt: Date,
        public updatedAt: Date,
        public resolvedAt?: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.urgency = urgency;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.resolvedAt = resolvedAt;
    }
}

module.exports = RequestEntity;